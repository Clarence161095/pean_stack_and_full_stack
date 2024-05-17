package com.example.todoapp.controller;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.todoapp.utils.JwtUtils;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;

@Controller
public class LoginController {
    private final AuthenticationManager authenticationManager;
    private final JwtUtils jwtUtils;

    public LoginController(AuthenticationManager authenticationManager, JwtUtils jwtUtils) {
        this.authenticationManager = authenticationManager;
        this.jwtUtils = jwtUtils;
    }

    @PostMapping("/login")
    public String login(@RequestParam String username, @RequestParam String password, HttpServletResponse response) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(username, password));
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String token = jwtUtils.generateToken(authentication);
        Cookie cookie = new Cookie("jwt", token);
        cookie.setHttpOnly(true);
        response.addCookie(cookie);
        return "redirect:/";
    }
}