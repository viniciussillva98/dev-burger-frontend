


export const formatDate = (string) => {
    return (
        new Date(string).toLocaleDateString("pt-br", {
            day: "2-digit",
            month: "short",
            hour: "2-digit",
            minute: "2-digit"
        })
    )
}