import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import EditPage from "../components/template/EditPage";

const editProfile = () => {
  const [data, setData] = useState(null);
  const router = useRouter();
  const { isReady } = router;

  useEffect(() => {
    if (isReady) {
      fetch("/api/profile")
        .then((res) => res.json())
        .then((data) => setData(data.data));
    }
  }, [isReady]);
  if (isReady) return <EditPage data={data} />
};

export default editProfile;
