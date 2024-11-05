package com.medicare.medicare.exception;

import com.medicare.medicare.exception.domain.BadRequestException;
import com.medicare.medicare.exception.domain.NotFoundException;
import com.medicare.medicare.exception.domain.SessionExpiredException;
import com.medicare.medicare.model.HttpResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;


import static org.springframework.http.HttpStatus.*;
import static org.springframework.http.HttpStatus.UNAUTHORIZED;

/**
 * @author : jayantakarmakar
 * @mailto : jayantakarmakar998@mail.com
 * @created : 05/11/24, Tuesday
 **/

@Slf4j
@RestControllerAdvice
public class ExceptionHandling implements ErrorController {

    @ExceptionHandler(BadRequestException.class)
    public ResponseEntity<HttpResponse> badRequestException(
            BadRequestException exception) {
        return createHttpResponse(
                HttpStatus.BAD_REQUEST, exception.getMessage());
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<HttpResponse> internalServerErrorException(
            Exception exception) {
        log.error(exception.getMessage());
        Throwable cause = exception.getCause();
        if (cause instanceof NotFoundException notFoundException) {
            return createHttpResponse(
                    NOT_FOUND, notFoundException.getMessage());
        } else if (cause instanceof SessionExpiredException sessionExpiredException) {
            return createHttpResponse(
                    UNAUTHORIZED, sessionExpiredException.getMessage());
        } else {
            return createHttpResponse(
                    INTERNAL_SERVER_ERROR, exception.getMessage());
        }
    }

    @ExceptionHandler(NotFoundException.class)
    public ResponseEntity<HttpResponse> notFound(
            NotFoundException exception) {
        log.error(exception.getMessage());
        return createHttpResponse(
                NOT_FOUND, exception.getMessage());
    }

    @ExceptionHandler(SessionExpiredException.class)
    public ResponseEntity<HttpResponse> sessionExpired(
            SessionExpiredException exception) {
        log.error(exception.getMessage());
        return createHttpResponse(exception.getMessage());
    }

    private ResponseEntity<HttpResponse> createHttpResponse(
            String message) {
        return new ResponseEntity<>(
                new HttpResponse(UNAUTHORIZED.value(),
                        UNAUTHORIZED,
                        UNAUTHORIZED.getReasonPhrase().toUpperCase(),
                        message.toUpperCase(), message),
                UNAUTHORIZED);
    }

    private ResponseEntity<HttpResponse> createHttpResponse(
            HttpStatus httpStatus, String message) {
        return new ResponseEntity<>(
                new HttpResponse(httpStatus.value(),
                        httpStatus,
                        httpStatus.getReasonPhrase().toUpperCase(),
                        message.toUpperCase(), "error"),
                httpStatus);
    }
}

