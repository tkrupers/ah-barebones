export const fetchTitle = async () => {
  try {
    const res = await fetch(`${process.env.SERVER_URL}/hello`);

    if (!res.ok) {
      throw new Error(res.statusText);
    }

    try {
      return await res.json();
    } catch (err) {
      return res;
    }
  } catch (err) {
    console.error(err);
    return false;
  }
};
