import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FadeInSection from '../FadeInSection';

const allImages = import.meta.glob("/src/assets/**/*.{png,jpg,jpeg,gif}", { eager: true });

function getImagesFrom(location) {
    return Object.keys(allImages)
        .filter((path) => path.startsWith(location)) // filter based on folder
        .map((path) => allImages[path].default);
}

const Work = ({ name, description = [], bannerImage, imageLocation, tags = [] }) => {
    const imageList = getImagesFrom(imageLocation);
    const [selectedImage, setSelectedImage] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                e.preventDefault();
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    return (
        <div className="work-content">
            <FadeInSection>
                <button id="back-btn" onClick={() => navigate('/works')}>Back to works</button>
                <div className="work-image">
                    <img src={bannerImage} alt={name} />
                </div>

                <div className="heading">
                    <h2>{name}</h2>
                    {tags.length > 0 && (
                        <p className="tags">
                            Tags:
                            <ul>
                                {tags.map((tag, index) => (
                                    <li key={index}>{tag}</li>
                                ))}
                            </ul>
                        </p>
                    )}
                </div>

                <br />
                <br />

                <h3>Description:</h3>
                {description.map((desc, index) => (
                    <p className="description" key={index}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        {desc}
                    </p>
                ))}

                <br />
                <br />
                <br />

                <h3>Preview:</h3>
                <br /><br />
                <div className="work-image-list">
                    {imageList.map((src, index) => (
                        <div key={index} className="work-image-container" onClick={() => setSelectedImage(src)}>
                            <img src={src} alt={`img-${index}`} className="w-40 h-auto" />
                        </div>
                    ))}
                </div>
            </FadeInSection>
            {selectedImage && (
                <div className="viewed-image">
                    <div className="relative">
                        <img
                            src={selectedImage}
                            alt="selected"
                        />
                        <button
                            onClick={() => setSelectedImage(null)}
                        >
                            ✕
                        </button>
                    </div>
                </div>
            )}
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div>
    );
};

export default Work;
