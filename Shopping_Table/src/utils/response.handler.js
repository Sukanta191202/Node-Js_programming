

export const sendResponse = (res,{status,sucess,message,data = null, error = null}) => {
     const response = {
        sucess,
        message,
     }

     if(data !== null){
        response.data = data
     }

     if( error !== null ){
        response.error = error
     }

     return res.status(status).json(response)
}