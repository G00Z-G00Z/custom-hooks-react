import { useState } from "react";

/**Interface that returns useTags hook */
export interface useTagsFuncs {
    /**List of all available tags */
    readonly availableTags: string[];
    /**Active tag in the filter */
    readonly activeTag: string | null;
    /**Evaluates if tag is in validTagList */
    readonly isValidTag: (tag: string) => boolean;
    /**Sets the active tag to one of active tags */
    readonly setActiveTag: (tag: string) => void;
    /**Resets the filter */
    readonly resetActiveTag: () => void;
}

export const useTags = (availableTags: string[]): useTagsFuncs => {
    const validTags = new Set(
        availableTags.map((tag) => tag.trim().toLowerCase())
    );

    const [activeTag, setActiveTagInternal] = useState<string | null>(null);

    const isValidTag = (tag: string): boolean =>
        validTags.has(tag.trim().toLowerCase());

    const setActiveTag = (tag: string): void => {
        const cleanTag = tag.trim().toLowerCase();
        if (validTags.has(cleanTag)) setActiveTagInternal(cleanTag);
    };

    const resetActiveTag = (): void => setActiveTagInternal(null);

    return {
        availableTags: [...validTags],
        activeTag,
        isValidTag,
        setActiveTag,
        resetActiveTag,
    };
};
