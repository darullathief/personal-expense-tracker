export function actionSuccess(type, data){
    return {
        type : type,
        data : data
    }
}

export function actionPending(type, data){
    return {
        type : type,
    }
}

export function actionError(type, error){
    return {
        type : type,
        error : error
    }
}