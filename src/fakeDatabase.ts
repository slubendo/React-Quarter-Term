export type Item = {
    id: number;
    name: string;
    description: string;
    price: string;
    category: "food" | "games" | "fitness" | "stationery" | "fashion" | "novelty" | "home decor" | "kitchenware" | "appliances" | "automotive" | "toys"
    imageUrl: string;
}

const items: Item[] = [
    {
        id: 1,
        name: "Full-Stack Pancakes",
        description: "Fluffy pancakes for frontend breakfast lovers and backend syrup drizzlers.",
        price: "9.99",
        category: "food",
        imageUrl: "https://cdn.discordapp.com/attachments/1093396341243252786/1156410909770657872/sam69420_full_stack_pancakes_for_web_development_ac246fd4-698c-41ba-8517-d17ba9cb281c.png"
    },
    {
        id: 2,
        name: "Full-Stack of Cards",
        description: "A card deck for developers. Learn programming concepts while playing.",
        price: "14.99",
        category: "games",
        imageUrl: "https://cdn.discordapp.com/attachments/1093396341243252786/1156411837265485874/sam69420_A_card_deck_for_developers._Learn_programming_concepts_e07cd93c-1083-4e4c-8b7c-45d62382a263.png"
    },
    {
        id: 3,
        name: "Full-Stacked Weights",
        description: "Dumbbells for bulking up your muscles and coding skills.",
        price: "59.99",
        category: "fitness",
        imageUrl: "https://cdn.discordapp.com/attachments/1093396341243252786/1156408942574968882/sam69420_a_full_stack_of_dumbell_weights_stacked_up_high_3b6c8ff3-04c1-4961-b734-c65aaef2b876.png"
    },
    {
        id: 4,
        name: "Full-Stack of Papers",
        description: "For jotting down ideas, bugs, or scribbles. Sometimes old school is best.",
        price: "4.99",
        category: "stationery",
        imageUrl: "https://cdn.discordapp.com/attachments/1093396341243252786/1156408865890517064/sam69420_an_office_with_too_many_stacks_of_paper_36b6cc8d-b168-4d00-957d-ef5fa778fb13.png"
    },
    {
        id: 5,
        name: "Full-Stack Hat",
        description: "A hat with layers for developers who think about the full picture.",
        price: "19.99",
        category: "fashion",
        imageUrl: "https://cdn.discordapp.com/attachments/1093396341243252786/1156408348334366760/sam69420_A_hat_with_layers_for_developers_who_think_about_the_f_0a66c9da-f54f-4f88-b597-0580d70b81f1.png"
    },
    {
        id: 6,
        name: "Full-Stack of Cash",
        description: "The desired outcome of every full-stack project.",
        price: "99.99",
        category: "novelty",
        imageUrl: "https://cdn.discordapp.com/attachments/1093396341243252786/1156408330433073253/sam69420_cyberpunk_Full-Stack_of_Cash_43fd8ecd-80f1-4fbd-951b-b874988da482.png"
    },
    {
        id: 7,
        name: "Full-Stack Candles",
        description: "Illuminate both your room and your mind.",
        price: "24.99",
        category: "home decor",
        imageUrl: "https://cdn.discordapp.com/attachments/1093396341243252786/1156412479283396628/sam69420_Full-Stack_Candles_Illuminate_both_your_room_and_your__46888d7e-1dfb-4921-9dfe-8344ee57c70f.png"
    },
    {
        id: 8,
        name: "Full-Stack Cookies",
        description: "Because every coder needs a sweet stack.",
        price: "7.99",
        category: "food",
        imageUrl: "https://cdn.discordapp.com/attachments/1093396341243252786/1156413366705856553/sam69420_a_stack_of_chocolate_chip_cookies_on_top_of_a_laptop_460e3eb5-cd8e-4a7b-aad6-0f269df3d2e0.png"
    },
    {
        id: 35,
        name: "Full-Stacked Plates",
        description: "From database dinner to frontend dessert, serve with style",
        price: "39.99",
        category: "kitchenware",
        imageUrl: "https://cdn.discordapp.com/attachments/1093396341243252786/1156416096832860170/sam69420_fully_stacked_plates._From_database_dinner_to_frontend_0a068906-6de9-47d7-aede-ccda2b2bc1b6.png"
    },
    {
        id: 10,
        name: "Full-Stack Frames",
        description: "Glasses that help you see the bigger picture.",
        price: "79.99",
        category: "fashion",
        imageUrl: "https://cdn.discordapp.com/attachments/1093396341243252786/1156416331051171871/sam69420_Full-Stack_Frames_Glasses_that_help_you_see_the_bigger_a9bc389e-35ce-45ab-b4c9-82dc20a53ba6.png"
    },
    {
        id: 12,
        name: "Full-Stacked Pizza",
        description: "Layers of flavors for the hungry developer.",
        price: "19.99",
        category: "food",
        imageUrl: "https://cdn.discordapp.com/attachments/1093396341243252786/1156416905268174878/sam69420_Full-Stacked_Pizza_with_Layers_of_flavors_fb4703bb-27ad-4b84-86d9-64a789059fa4.png"
    },
    {
        id: 30,
        name: "Full-Stack Fridge",
        description: "Keep your frontend snacks separate from your backend beverages.",
        price: "599.99",
        category: "appliances",
        imageUrl: "https://cdn.discordapp.com/attachments/1093396341243252786/1156418648999739402/sam69420_a_fridge_full_of_food_that_is_shaped_like_a_laptop_d99800dd-2b39-4c48-bfcb-1d5a5a56e604.png"
    },
    {
        id: 28,
        name: "Full-Stacked Tires",
        description: "For driving projects forward from the ground up.",
        price: "249.99",
        category: "automotive",
        imageUrl: "https://cdn.discordapp.com/attachments/1093396341243252786/1156417157303906344/sam69420_cyberpunk_Full-Stacked_Tires_f08a8f1a-0b1d-4970-9102-2516f4448a63.png"
    },
    {
        id: 41,
        name: "Full-Stack of Ken Dolls",
        description: "Perfect for debugging your fashion-forward toy applications.",
        price: "49.99",
        category: "toys",
        imageUrl: "https://cdn.discordapp.com/attachments/1093396341243252786/1156465451816198216/sam69420_a_full_stack_of_ken_dolls_5a7e7476-ec91-4bcc-9d56-9c842bb3307b.png"
    }
]

export function allItems() {
    return items;
}

export function getItem(id: number) {
    return items.find(item => item.id === id);
}

export function getitembycategory(category: string) {
    return items.filter(item => item.category === category);
}

export function searchItems(query: string) {
    return items.filter(item => item.name.toLowerCase().includes(query.toLowerCase()));
}
