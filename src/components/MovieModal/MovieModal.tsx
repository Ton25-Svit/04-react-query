import { useEffect } from 'react';
import css from './MovieModal.module.css'
import { createPortal } from 'react-dom'
import type { Movie } from '../../types/movie';

interface MovieModalProps {
    movie: Movie;
    onClose: () => void;
}

export default function MovieModal({movie, onClose}: MovieModalProps) {

    const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onClose();
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "";
        };
    }, [onClose]);
   
   
    return createPortal(

    <div className={css.backdrop} onClick={handleBackdropClick} role="dialog" aria-modal="true">
        <div className={css.modal}>
            <button className={css.closeButton} aria-label="Close modal" onClick={onClose}>
            &times;
            </button>
            <img
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
            alt={movie.title}
            className={css.image}
    />
        <div className={css.content}>
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
        <p>
            <strong>Release Date:</strong> {movie.release_date}
        </p>
        <p>
            <strong>Rating:</strong> {movie.vote_average}/10
        </p>
    </div>
  </div>
        </div>,
        document.body
    )
}