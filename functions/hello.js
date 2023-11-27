exports.handler = async (event, context) => {
   try {
      const response = {
         statusCode: 200,
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({ message: 'hello' }),
      };

      return Promise.resolve(response);
   } catch (error) {
      return Promise.reject(error);
   }
};
