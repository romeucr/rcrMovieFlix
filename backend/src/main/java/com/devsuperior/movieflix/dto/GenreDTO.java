package com.devsuperior.movieflix.dto;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import com.devsuperior.movieflix.entities.Genre;

public class GenreDTO implements Serializable {
	private static final long serialVersionUID = 1L;

	private Long id;
	private String name;
	private List<MovieDTOGetGenre> movies = new ArrayList<>();

	public GenreDTO() {
	}

	public GenreDTO(Long id, String name) {
		super();
		this.id = id;
		this.name = name;
	}

	public GenreDTO(Genre entity) {
		super();
		this.id = entity.getId();
		this.name = entity.getName();
		entity.getMovies().forEach(mov -> this.movies.add(new MovieDTOGetGenre(mov)));
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

	public List<MovieDTOGetGenre> getMovies() {
		return movies;
	}
}
