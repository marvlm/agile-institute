module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy("assets");

    return {
        passthroughFileCopy: true,
        markdownTemplateEngine: "njk",
        templateFormats: ["html", "md", "njk"],
        dir: {
                input: "src",
                output: "_site",
                include: "includes"
        }

    }

}