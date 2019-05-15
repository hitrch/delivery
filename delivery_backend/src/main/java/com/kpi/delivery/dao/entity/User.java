package com.kpi.delivery.dao.entity;

import javax.persistence.*;
import javax.validation.constraints.NotNull;


@Entity
@Table(name = "users")
@TableGenerator(name = "id", initialValue = 0, allocationSize = 1)
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.TABLE, generator = "id")
    private Long id;
    @NotNull
    private String name;
    @NotNull
    private String password;

    public User() {
    }

    public Long getId() {
        return id;
    }

    public void setId(final Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(final String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
