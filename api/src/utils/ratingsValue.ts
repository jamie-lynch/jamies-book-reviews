const ratingsValue = (value: number) => {
    return value > 0 && value < 6 ? value : null;
}

export default ratingsValue