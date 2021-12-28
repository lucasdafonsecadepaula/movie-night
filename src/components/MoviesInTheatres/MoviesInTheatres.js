import React, { useContext } from 'react';
import { ContextMoveRealeses } from '../../hooks/MovieRealesesProvider';
import ColumnMovieMaker from '../ColumnMovieMaker/ColumnMovieMaker';

export default function MoviesInTheatres() {
  const { moviesRelasesArray } = useContext(ContextMoveRealeses);

  return (
    <ColumnMovieMaker
      value={{ arrayMovies: moviesRelasesArray, title: 'Lançamentos' }}
    />
  );
}
