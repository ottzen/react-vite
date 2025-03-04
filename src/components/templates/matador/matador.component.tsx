import { useState } from "react";
import { Episode1 } from "../matador/files/episode1";
import S from "./matador.module.scss";

const MatadorComponent = () => {
    const [searchQuery, setSearchQuery] = useState("");

    // Function to highlight matched words
    const highlightText = (text: string, query: string) => {
        if (!query) return text; // If no search query, return text as is

        const regex = new RegExp(`(${query})`, "gi"); // Case-insensitive match
        return text.split(regex).map((part, index) =>
            part.toLowerCase() === query.toLowerCase() ? (
                <strong key={index} style={{ textDecoration: "underline" }}>{part}</strong>
            ) : (
                part
            )
        );
    };

    const filteredResults = Episode1.filter(entry =>
        entry.lines.some(lineObj =>
            lineObj.line.toLowerCase().includes(searchQuery.toLowerCase())
        )
    );

    return (
        <div className={S.container}>
            <input
                type="text"
                placeholder="Search subtitles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <ul>
                {filteredResults.map((entry, index) => (
                    <li key={index}>
                        <strong>{entry.start} - {entry.end}</strong>
                        <ul>
                            {entry.lines.map((lineObj, i) => (
                                <li key={i}>{highlightText(lineObj.line, searchQuery)}</li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MatadorComponent;
