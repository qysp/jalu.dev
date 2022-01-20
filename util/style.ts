export const fgColor = (opacity = 1) => {
    return `rgba(var(--fg), ${opacity});`;
};

export const bgColor = (opacity = 1) => {
    return `rgba(var(--bg), ${opacity});`;
};

export const linearGradient = (direction = 'to right') => {
    return `linear-gradient(${direction}, rgb(248, 212, 83), rgb(255, 93, 91))`;
};
