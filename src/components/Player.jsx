import React from "react";
import { useParams } from "react-router-dom";

function Player() {
    const { id } = useParams();

    return (
        <div style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "black",
            zIndex: 1000
        }}>
            <iframe
                title="movie-trailer"
                src={`https://www.youtube.com/embed/${id}?autoplay=1&controls=1`}
                width="100%"
                height="100%"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </div>
    );
}

export default Player;
