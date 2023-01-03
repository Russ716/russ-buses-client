export const isStaff = () => {
    const auth = localStorage.getItem("busboy")
    const userType = JSON.parse(auth)
    return userType?.staff
}