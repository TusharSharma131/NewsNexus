export const formatDate = (dateString) =>{
    return new Date(dateString).toLocaleDateString('en-IN',
    {
      year  : 'numeric',
      month : 'long',
      day   : 'numeric' 
    })
}

export const formatTime = (dateString) =>{
    return new Date(dateString).toLocaleTimeString('en-IN',
    {
      hour   : 'numeric',
      minute : 'numeric',
      second : 'numeric',
      hour12 : true
    })
}