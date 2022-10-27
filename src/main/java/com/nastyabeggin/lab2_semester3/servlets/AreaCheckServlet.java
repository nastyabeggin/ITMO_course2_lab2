package com.nastyabeggin.lab2_semester3.servlets;


import com.nastyabeggin.lab2_semester3.model.Shot;
import com.nastyabeggin.lab2_semester3.model.ShotCollectionManager;
import org.codehaus.jackson.map.ObjectMapper;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.io.PrintWriter;
import java.time.LocalDateTime;
import java.time.ZoneOffset;
import java.time.format.DateTimeFormatter;

@WebServlet(name = "area-check-servlet", value = "/area-check-servlet")
public class AreaCheckServlet extends HttpServlet {
    @Override
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        PrintWriter pw = response.getWriter();
        LocalDateTime startTime = LocalDateTime.now(ZoneOffset.UTC);
        ObjectMapper om = new ObjectMapper();
        try {
            float x = Float.parseFloat(request.getParameter("x-value"));
            float y = Float.parseFloat(request.getParameter("y-value"));
            float r = Float.parseFloat(request.getParameter("r-value"));
            System.out.println(x);
            if (!validateVariables(x, y, r)) {
                response.setStatus(400);
                return;
            }

            Boolean status = isHit(x, y, r);

            DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
            Shot newShot = new Shot(x, y, r, startTime.minusMinutes(Long.parseLong(request.getParameter("timezone"))).format(formatter),
                    Math.round(LocalDateTime.now().minusNanos(startTime.getNano()).getNano() * 0.000001), status);
            ShotCollectionManager.add(newShot);

            getServletContext().setAttribute("shots", ShotCollectionManager.getCollection());
            String responseBody = om.writeValueAsString(newShot);
            response.setContentType("application/json");
            response.setCharacterEncoding("UTF-8");
            pw.write(responseBody);
            pw.flush();
        } catch (NumberFormatException ignored) {
        }
    }

    private boolean validateVariables(double x, double y, double r) {
        return y > -5 && y < 3 && x >= -2 && x <= 2 && r >= 1 && r <= 5;
    }

    private boolean isHit(double x, double y, double r) {
        return isCircleZone(x, y, r) || isTriangleZone(x, y, r) || isRectangleZone(x, y, r);
    }

    private boolean isRectangleZone(double x, double y, double r) {
        return (x <= 0) && (y >= 0) && (x >= (-1) * r / 2) && (y <= r);
    }

    private boolean isCircleZone(double x, double y, double r) {
        return (x * x + y * y <= r * r) && (x >= 0) && (y >= 0);
    }

    private boolean isTriangleZone(double x, double y, double r) {
        return (x <= 0) && (y <= 0) && (y >= (-2) * x - r);
    }
}