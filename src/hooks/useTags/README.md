# useTags

useTags es un hook que permite hacer un hook que toma un listado de "tags". Este listado de tags, sirve para poder poner tags a cosas, y posteriormente hacer un filtro que elimine los tags y así. 

Las funciones que entrega el use tags son: 

```
readonly availableTags: string[];
    /**Active tag in the filter */
    readonly activeTag: string | null;
    /**Evaluates if tag is in validTagList */
    readonly isValidTag: (tag: string) => boolean;
    /**Sets the active tag to one of active tags */
    readonly setActiveTag: (tag: string) => void;
    /**Resets the filter */
    readonly resetActiveTag: () => void;
```
