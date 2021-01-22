package com.devsuperior.movieflix.services;

import java.util.Arrays;
import java.util.List;
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

@Service
public class MovieService {

	@Autowired
	private MovieRepository movieRepository;

	@Autowired
	private GenreRepository genreRepository;

	public Page<MovieDTO> findAllPaged(Long genreId, PageRequest pageRequest) {
		List<Genre> genres = (genreId == 0) ? null : Arrays.asList(genreRepository.getOne(genreId));

		Page<Movie> list = movieRepository.findAll(genres, pageRequest);

		return list.map(mov -> new MovieDTO(mov)); // to transform a List<Movie> to List<MovieDTO>
	}

	@Transactional(readOnly = true)
	public MovieDTOMovieById findById(Long id) {
		Optional<Movie> obj = movieRepository.findById(id); // findById returns an Optional.
		/*
		 * Movie entity = obj.orElseThrow(() -> new
		 * ResourceNotFoundException("Entity not Found")); // to get as Product the //
		 * Optional object
		 */
		Movie entity = obj.get();

		return new MovieDTOMovieById(entity, entity.getReviews());
	}
}
