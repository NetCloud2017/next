export async function getAllNotes() {
  const response = await fetch(`http://localhost:1337/api/notes`);
  const data = await response.json();

  const res = {};
	console.log(data, 'sss')
  data.data.forEach(
    ({ id, title, content, slug, updatedAt  }) => {
      res[slug] = JSON.stringify({
        title,
        content,
        updateTime: updatedAt,
      });
    },
  );

  return res;
}

export async function addNote(data) {
  const response = await fetch(`http://localhost:1337/api/notes`, {
    method: "POST",
    headers: {
      Authorization:
        "1f7c4ac46528a65d1d2e5643b7f078a8c665d175a5ec5a2302497b0d4822793dbee6cabfec5edfbc9dc78ce67047347f37aafff460e5b364c0b39858caaea3769bba942066915896f957e877663d7f6c9d9191eee6bb1eac91e23a2eafcc368cbba38557e857dc012bd62da65f440924526f2728889b996109560bde5b52df97",

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
        "1f7c4ac46528a65d1d2e5643b7f078a8c665d175a5ec5a2302497b0d4822793dbee6cabfec5edfbc9dc78ce67047347f37aafff460e5b364c0b39858caaea3769bba942066915896f957e877663d7f6c9d9191eee6bb1eac91e23a2eafcc368cbba38557e857dc012bd62da65f440924526f2728889b996109560bde5b52df97",
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
    title: data.data[0].attributes.title,
    content: data.data[0].attributes.content,
    updateTime: data.data[0].attributes.updatedAt,
    id: data.data[0].id,
  };
}

export async function delNote(uuid) {
  const { id } = await getNote(uuid);
  const response = await fetch(`http://localhost:1337/api/notes/${id}`, {
    method: "DELETE",
    headers: {
      Authorization:
        "1f7c4ac46528a65d1d2e5643b7f078a8c665d175a5ec5a2302497b0d4822793dbee6cabfec5edfbc9dc78ce67047347f37aafff460e5b364c0b39858caaea3769bba942066915896f957e877663d7f6c9d9191eee6bb1eac91e23a2eafcc368cbba38557e857dc012bd62da65f440924526f2728889b996109560bde5b52df97",
      "Content-Type": "application/json",
    },
  });
  const res = await response.json();
}
