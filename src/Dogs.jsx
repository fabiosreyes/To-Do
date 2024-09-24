import React from 'react';
import { useState, useEffect } from 'react';
//import { useQuery } from 'react-query';
//import axios from 'axios';

async function fetchDogs() {
    try {
        const response = await fetch('https://dog.ceo/api/breed/hound/images');
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Network response was not ok.');
        }
    } catch (error) {
        console.error('Error:', error);
        return { message: [] }; // Return an empty array in case of error
    }
}

export default function Dogs() {
    const [dogImages, setDogImages] = useState([]);

    useEffect(() => {
        const loadDogs = async () => {
            const dogs = await fetchDogs();
            setDogImages(dogs.message.slice(0,3));
        }
        loadDogs();
    }, [])

    return (
        <div>
            <h2>Random Dogs Test</h2>
            <button onClick={fetchDogs}>Fetch</button>
            <div className="container">
            {dogImages.length > 0 ? (
                    dogImages.map((dogImage, index) => (
                        <div className="item" key={index}>
                            <a href={dogImage} target="_blank" rel="noreferrer">
                                <img className="img" src={dogImage} alt="dog" />
                            </a>
                        </div>
                    ))
                ) : (
                    <p>Loading dog images...</p>
                )}
            </div>
        </div>
    )
}
