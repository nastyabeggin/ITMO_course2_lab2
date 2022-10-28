package com.nastyabeggin.lab2_semester3.servlets;

import com.nastyabeggin.lab2_semester3.model.ShotCollectionManager;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet(name = "CleanTableServlet", value = "/cleaner")
public class CleanTableServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        ShotCollectionManager.clear();
        getServletContext().setAttribute("shots", ShotCollectionManager.getCollection());
    }
}