package com.devsuperior.movieflix.dto;

import java.io.Serializable;

import javax.validation.constraints.NotBlank;

import com.devsuperior.movieflix.entities.Review;

public class ReviewInsertDTO implements Serializable {
	private static final long serialVersionUID = 1L;

	private Long id;
	
	@NotBlank(message = "Text can not be blank neither null")
	private String text;
	private Long movieId;
	private Long userId;

	public ReviewInsertDTO() {
	}

	public ReviewInsertDTO(Long id, String text, Long userId, Long movieId) {
		super();
		this.id = id;
		this.text = text;
		this.movieId = movieId;
		this.userId = userId;
	}
	
	public ReviewInsertDTO(Review entity) {
		super();
		this.id = entity.getId();
		this.text = entity.getText();
		this.movieId = entity.getMovie().getId();
		this.userId = entity.getUser().getId(); //USER ID TEM QUE PEGAR O USUARIO LOGADO POR ENQUANTO ESTA PASSANDO NA REQUISICAO. VER O INSERT USER DO DSCATALOG
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

	public Long getMovieId() {
		return movieId;
	}

	public void setMovieId(Long movieId) {
		this.movieId = movieId;
	}

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}
}
