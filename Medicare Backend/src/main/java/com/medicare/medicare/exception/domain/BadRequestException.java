package com.medicare.medicare.exception.domain;

import java.io.Serial;

/**
 * @author : jayantakarmakar
 * @mailto : jayantakarmakar998@mail.com
 * @created : 05/11/24, Tuesday
 **/

public class BadRequestException extends Exception {
    @Serial
    private static final long serialVersionUID = 7992904489502842099L;

    public BadRequestException() {
        super();
    }

    public BadRequestException(String errMsg) {
        super(errMsg);
    }
}
