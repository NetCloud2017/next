export async function getAllNotes() {
  const response = await fetch(`http://localhost:1337/api/notes`);
  const data = await response.json();

  const res = {};
  data.data.forEach(({ id, title, content, slug, updatedAt }) => {
    res[slug] = JSON.stringify({
      title,
      content,
      updateTime: updatedAt,
    });
  });

  return res;
}

export async function addNote(data) {
  const response = await fetch(`http://localhost:1337/api/notes`, {
    method: "POST",
    headers: {
      Authorization:
        "98ff16436c329ca02b6bb6675d4c368e0ab4ea6f272b8a639f6645ea44a4c36a71c679cac782570c4a4bee4749477899724c1ad65f6c205bbbcd09f6a3306b8ac9fdea3cac37ffef21ff37137324a8d2e10e3981d51b0c3e8adb53888e7353a262cdd42477b4188804c2f91564ac318c673f2016da07a90c6c8cd60a8323c9fc",

      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data: JSON.parse(data),
    }),
  });
  const res = await response.json();
  return res.data.attributes.slug;
}

export async function updateNote(uuid, data) {
  const { id } = await getNote(uuid);
  const response = await fetch(`http://localhost:1337/api/notes/${id}`, {
    method: "PUT",
    headers: {
      Authorization:
        "98ff16436c329ca02b6bb6675d4c368e0ab4ea6f272b8a639f6645ea44a4c36a71c679cac782570c4a4bee4749477899724c1ad65f6c205bbbcd09f6a3306b8ac9fdea3cac37ffef21ff37137324a8d2e10e3981d51b0c3e8adb53888e7353a262cdd42477b4188804c2f91564ac318c673f2016da07a90c6c8cd60a8323c9fc",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data: JSON.parse(data),
    }),
  });
  const res = await response.json();
}

export async function getNote(uuid) {
  const response = await fetch(
    `http://localhost:1337/api/notes?filters[slug][$eq]=${uuid}`,
  );
  const data = await response.json();

  return {
    title: data.data[0].title,
    content: data.data[0].content,
    updateTime: data.data[0].updatedAt,
    id: data.data[0].id,
  };
}

export async function delNote(uuid) {
  const { id } = await getNote(uuid);
  const response = await fetch(`http://localhost:1337/api/notes/${id}`, {
    method: "DELETE",
    headers: {
      Authorization:
        "98ff16436c329ca02b6bb6675d4c368e0ab4ea6f272b8a639f6645ea44a4c36a71c679cac782570c4a4bee4749477899724c1ad65f6c205bbbcd09f6a3306b8ac9fdea3cac37ffef21ff37137324a8d2e10e3981d51b0c3e8adb53888e7353a262cdd42477b4188804c2f91564ac318c673f2016da07a90c6c8cd60a8323c9fc",
      "Content-Type": "application/json",
    },
  });
  const res = await response.json();
}
