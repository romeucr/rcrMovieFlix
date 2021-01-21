package com.devsuperior.movieflix.dto;

import java.io.Serializable;

import com.devsuperior.movieflix.entities.User;

public class UserDTO implements Serializable {
	private static final long serialVersionUID = 1L;
	
	private Long id;
	private String name;
	
	public UserDTO() {
	}

	public UserDTO(Long id, String name, String email) {
		super();
		this.id = id;
		this.name = name;
	}
	
	public UserDTO(User entity) {
		super();
		this.id = entity.getId();
		this.name = entity.getName();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
}
