// Centralized spacing configuration for consistent layout
export const spacing = {
  // Main section spacing
  sectionGap: "space-y-8", // Gap between major sections (News, Experience, Publications, etc.)
  
  // Layout spacing
  columnGap: "gap-0", // Horizontal gap between left and right columns
  
  // Section header spacing
  sectionHeaderBottom: "mb-3", // Bottom margin after section headers
  
  // Experience section specific spacing
  experience: {
    entryGap: "space-y-4", // Gap between experience entries
    internalSpacing: "mt-0", // Internal spacing within each entry (advisor, manager, description)
  },
  
  // Publication section specific spacing
  publication: {
    entryGap: "space-y-0", // Gap between publication entries
    dividerSpacing: "my-4", // Top and bottom margin for horizontal divider lines
  },
  
  // News section specific spacing
  news: {
    entryGap: "space-y-12", // Gap between news entries
  },
  
  // Portfolio section specific spacing
  portfolio: {
    entryGap: "space-y-12", // Gap between portfolio entries
  },
  
  // Education section specific spacing
  education: {
    entryGap: "space-y-12", // Gap between education entries
  },
} as const;

// Helper function to get spacing classes
export const getSpacing = (key: keyof typeof spacing) => spacing[key];
