// Dynamically create travel entries for all folders
// When new folders are added to src/travel, they'll be picked up on rebuild

const travelFolders = [
    { folder: "2025-europe", displayName: "Austria & Italy 2025" },
    { folder: "argentina-2024", displayName: "Argentina 2024" },
    { folder: "china-2024", displayName: "China 2024" },
    { folder: "seattle-2024", displayName: "Seattle 2024" },
    { folder: "bc-ab-2024", displayName: "BC & Alberta 2024" },
    { folder: "japan-2023", displayName: "Japan 2023" },
    { folder: "alberta-2023", displayName: "Alberta 2023" },
];

export const TRAVELS = travelFolders.map((travel) => ({
    imgDir: `../travel/${travel.folder}`,
    tripName: travel.displayName,
    folderName: travel.folder,
}));