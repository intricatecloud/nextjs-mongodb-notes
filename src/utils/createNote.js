export async function createNote(title, content) {
  const res = await fetch("/api/notes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, content }),
  });

  const { success, data } = await res.json();
  if (success === true) {
    return data._id;
  } else {
    console.log("Could not create note");
  }
}

export async function deleteNote(id) {
  const res = await fetch(`/api/notes/${id}`, {
    method: "DELETE",
  });

  const { success, data } = await res.json();
  if (success === true) {
    return data;
  } else {
    console.log("Could not delete note");
  }
}
