export const process: Process = {
  id: 1,
  name: "Fake Process",
  sections: [
    {
      id: 1,
      order: 0,
      title: "Section 1",
      objects: [
        {
          id: 1,
          type: "input",
          properties: {
            name: "Nom du client",
            type: "short_text",
            description: "Short text input field",
            defaultValue: "penis",
            mutable: true,
            required: true,
          }
        }
      ]
    }
  ]
}