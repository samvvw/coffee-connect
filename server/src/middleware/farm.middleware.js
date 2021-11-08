exports.validateFarmerUser = (req, res, next) => {
    const userHasFarm = req.currentUser.farms.findIndex(
        (e) => e === req.farm?.id
    )
    if (req.currentUser.userType === 'farmer') {
        if (userHasFarm != -1 || !req.farm) {
            next()
        } else {
            res.status(403).json({
                error: "Forbidden access, user doesn't have permissions to access this farm.",
            })
        }
    } else {
        res.status(403).json({
            error: 'Forbidden access, user is not farmer type',
        })
    }
}
