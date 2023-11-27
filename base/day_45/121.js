const config = {
	languages: [],
	set language(lang) {
		return this.languages; //setter dung de set values chu ko get value
	}
};
config.language = 123;
console.log(config.language); 
//D