import React from 'react';


function MovieRow(props) {

    const urlImage = "https://image.tmdb.org/t/p/w185";


        return <table key={props.movie.id}>
            <tbody>
                <tr>
                    <td>
                        <img src= {urlImage + props.movie.poster_path} alt="poster" width="120" />
                    </td>
                    <td>
                        <h3>{props.movie.title}</h3>
                        <p>{props.movie.overview}</p>
                        <h1>{props.movie.vote_average}</h1>
                    </td>
                </tr>
            </tbody>
        </table>
    }

export default MovieRow