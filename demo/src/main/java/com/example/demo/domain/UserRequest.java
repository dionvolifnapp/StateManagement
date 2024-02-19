package com.example.demo.domain;

import jakarta.validation.constraints.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter

public class UserRequest {
    @NotNull(message = "First Name cannot be Null")
    @NotBlank(message = "First Name cannot be Empty")
    @Pattern(regexp="[a-zA-Z]*", message = "First Name can only be alphabetic")
    private String firstName;
    @NotNull
    @NotBlank
    @Pattern(regexp="[a-zA-Z]*")
    private String lastName;
    private String phone;
    private String email;

    @Min(value = 16, message = "Age less than 16")
    @Max(value = 120, message = "Age greater than 120")
    private int age;

}
