export const fgColor = (opacity = 1) => {
    return `rgba(var(--fg), ${opacity});`;
};

export const bgColor = (opacity = 1) => {
    return `rgba(var(--bg), ${opacity});`;
};

export const linearGradient = (direction = 'to right') => {
    return `linear-gradient(${direction}, rgb(83, 248, 225) 33.33%, rgb(127, 91, 255))`;
};
