const postUrl = async (params) => {
    const result = await fetch("http://localhost:3000/shorten", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    });
    const content = await result.json();
    return content;
};

export default postUrl;