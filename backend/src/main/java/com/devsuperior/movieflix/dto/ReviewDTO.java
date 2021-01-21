package com.devsuperior.movieflix.dto;

import java.io.Serializable;

import com.devsuperior.movieflix.entities.Review;

public class ReviewDTO implements Serializable {
	private static final long serialVersionUID = 1L;

	private Long id;
	private String text;
	private UserDTO user;

	public ReviewDTO() {
	}

	public ReviewDTO(Long id, String text, UserDTO user) {
		super();
		this.id = id;
		this.text = text;
		this.user = user;
	}

	public ReviewDTO(Review entity) {
		super();
		this.id = entity.getId();
		this.text = entity.getText();
		this.user = new UserDTO(entity.getUser());
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	public UserDTO getUser() {
		return user;
	}

	public void setUser(UserDTO user) {
		this.user = user;
	}
}
