export default {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "array",
      of: [{ type: "image" }],
      options: {
        hotspot: true,
      },
    },
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 90,
      },
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "discount",
      title: "Discount(%)",
      type: "number",
    },
    {
      name: "details",
      title: "Details",
      type: "object",
      fields: [
        { name: "processor", title: "CPU", type: "string" },
        { name: "screen", title: "screen", type: "string" },
        { name: "resolution", title: "Resolution", type: "string" },
        { name: "display_type", title: "Display Type", type: "string" },
        { name: "viewing_angle", title: "Viewing Angle", type: "string" },
        { name: "response_time", title: "Response Time(ms)", type: "string" },
        { name: "refresh_rate", title: "Refresh Rate(Hz)", type: "string" },
        { name: "panel_technology", title: "Panel Technology", type: "string" },
        {
          name: "input_output_types",
          title: "Input/Output Types",
          type: "string",
        },

        { name: "operating_system", title: "OS", type: "string" },
        { name: "ram", title: "RAM", type: "string" },
        { name: "ssd", title: "SSD", type: "string" },
        { name: "ports", title: "Ports", type: "string" },
        { name: "graphic", title: "Graphic", type: "string" },
        { name: "warranty", title: "Warranty", type: "string" },
        { name: "back_camera", title: "BCamera", type: "string" },
        { name: "front_camera", title: "FCamera", type: "string" },
        { name: "battery", title: "Battery", type: "string" },
        {
          name: "frequency_response",
          title: "Frequency Response",
          type: "string",
        },

        {
          name: "wireless_standby_time",
          title: "Wireless Standby Time",
          type: "string",
        },
        {
          name: "connectionType",
          title: "Connection Type",
          type: "array",
          of: [{ type: "string" }],
        },
        {
          name: "connectors",
          title: "Connectors",
          type: "array",
          of: [{ type: "string" }],
        },

        { name: "multimedia_keys", title: "Multimedia Keys", type: "number" },
        {
          name: "number_of_buttons",
          title: "Number of Buttons",
          type: "number",
        },

        { name: "width", title: "Width", type: "string" },
        { name: "height", title: "Height", type: "string" },
        { name: "depth", title: "Depth", type: "string" },
        { name: "curved", title: "Curved(monitor)", type: "boolean" },
        {
          name: "built_in_speakers",
          title: "Built-in Speakers",
          type: "boolean",
        },
        { name: "bluetooth", title: "Bluetooth", type: "boolean" },
        {
          name: "noise_cancelling",
          title: "Noise Cancelling",
          type: "boolean",
        },
        { name: "sound_isolating", title: "Sound Isolation", type: "boolean" },
        { name: "mechanical_keys", title: "Mechanical Keys", type: "boolean" },
        {
          name: "backlit_keys",
          title: "Backlit Keys",
          type: "boolean",
        },
        { name: "microphone", title: "Microphone", type: "boolean" },
        { name: "wireless", title: "Wireless", type: "boolean" },
        {
          name: "ergonomic_design",
          title: "Ergonomic Design",
          type: "boolean",
        },
        {
          name: "designed_for_gaming",
          title: "Designed For Gaming",
          type: "boolean",
        },
      ],
    },
    {
      name: "brand",
      title: "Brand",
      type: "string",
    },
    {
      name: "category",
      title: "Category",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "isOffer",
      title: "IsOffer",
      type: "boolean",
    },
    {
      name: "registerDate",
      title: "RegisterDate",
      type: "datetime",
    },
    {
      name: "starRating",
      title: "Star Rating",
      type: "number",
    },
  ],
};
