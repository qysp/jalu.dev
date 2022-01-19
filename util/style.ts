export const fgColor = (opacity = 1) => {
    return `rgba(var(--fg), ${opacity});`;
};

export const bgColor = (opacity = 1) => {
    return `rgba(var(--bg), ${opacity});`;
};

export const easeInOut = (property = 'all') => {
    return `${property} 0.125s cubic-bezier(.58, .18, .68, 1.1);`;
};
