import { createClient } from "contentful";
import { useState, useEffect } from "react";
const client = createClient({
  space: "8sdirxbcrn01",
  environment: "master",
  accessToken: import.meta.env.VITE_API_KEY,
});

export const useFetchBrands = () => {
  const [loading, setLoading] = useState(true);
  const [brands, setBrands] = useState([]);

  const getData = async () => {
    try {
      const response = await client.getEntries({
        order: "sys.id",
        content_type: "stilinaBrands",
      });
      const brands = response.items.map((item) => {
        const { name, title, image, logo, description } = item.fields;
        const id = item.sys.id;
        const img = image.fields?.file?.url;
        const brandLogo = logo.fields?.file?.url;
        return { id, name, title, img, brandLogo, description };
      });
      setBrands(brands);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { loading, brands };
};

export const useFetchMedia = () => {
  const [loading, setLoading] = useState(true);
  const [media, setMedia] = useState([]);

  const getData = async () => {
    try {
      const response = await client.getEntries({
        content_type: "stilinaMedia",
      });
      const media = response.items.map((item) => {
        const { title, description, tag, image, date } = item.fields;
        const id = item.sys.id;
        const img = image.fields?.file?.url;
        return { id, title, description, tag, img, date };
      });

      setMedia(media);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return { loading, media };
};

export const useFetchSinglePost = (id) => {
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState(null);

  const getData = async () => {
    try {
      const response = await client.getEntry(id);

      const image = response.fields.image.fields?.file?.url;
      let post = { ...response.fields, image };
      setPost(post);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return { loading, post };
};
