package com.devsuperior.movieflix.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.movieflix.dto.MovieDTO;
import com.devsuperior.movieflix.dto.MovieDTOMovieById;
import com.devsuperior.movieflix.entities.Genre;
import com.devsuperior.movieflix.entities.Movie;
import com.devsuperior.movieflix.repositories.GenreRepository;
import com.devsuperior.movieflix.repositories.MovieRepository;
import com.devsuperior.movieflix.services.exceptions.ResourceNotFoundException;

@Service
public class MovieService {

	@Autowired
	private MovieRepository movieRepository;

	@Autowired
	private GenreRepository genreRepository;

	public Page<MovieDTO> findAllPaged(Long genreId, PageRequest pageRequest) {
		Genre genre = (genreId == 0) ? null : genreRepository.getOne(genreId);

		Page<Movie> list = movieRepository.findAll(genre, pageRequest);

		return list.map(mov -> new MovieDTO(mov)); // to transform a List<Movie> to List<MovieDTO>
	}

	@Transactional(readOnly = true)
	public MovieDTOMovieById findById(Long id) {
		Optional<Movie> obj = movieRepository.findById(id); // findById returns an Optional.

		Movie entity = obj.orElseThrow(() -> new ResourceNotFoundException("Entity not Found")); // to get as

		return new MovieDTOMovieById(entity, entity.getReviews());
	}
}
