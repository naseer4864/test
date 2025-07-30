module.exports = (error) => {
  try {
    if (!error) {
      console.error("No error provided to error handler");
      return;
    }
    
    // Log the error for debugging
    console.error("Error occurred:", error);
    
    // If it's an ApiError, it should have status and message
    if (error.status && error.message) {
      console.error(`API Error ${error.status}: ${error.message}`);
    } else if (error.message) {
      console.error(`Error: ${error.message}`);
    } else {
      console.error("Unknown error format:", error);
    }
  } catch (globalError) {
    console.error("Unexpected error inside errorHandler:", globalError.message);
  }
};