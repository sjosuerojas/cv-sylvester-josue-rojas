exports.init = (req, res) => {
    res.status(200).json({
      status_error: false,
      status_message: 'Server is runnig...',
      status_info: {
        activity: new Date(),
        status_code: 200,
      },
    })
  }
  