export interface image {
    data: {
        attributes: {
            url: string;
            alternativeText: string;
        }
    }
}

export interface Article {
    title: string;
    content: string;
    image?: image;
}

export interface FormComponent {
    __typename: string;
    id: string;
    label: string;
    options?: string[];
}

export interface FormBlock {
    __typename: string;
    title: string;
    FormComponents: FormComponent[];
}

export interface FormAttributes {
    title: string;
    form_blocks: {
        data: {
            attributes: FormBlock;
        }[];
    };
}

export interface FormData {
    id: string;
    attributes: FormAttributes;
}

export interface FormResponse {
    form: {
        data: FormData;
    };
}

export interface link {
    href: string;
    id: string;
    label: string;
    theme: string;
}

export interface card {
    title?: string;
    text?: string;
    image?: image;
    link?: link;
}

export interface blog {
    data: {
        attributes: {
            title?: string;
            description?: string;
            image?: image;
            slug?: string;
        }

    }
}

export interface Block {
    __typename: string;
    id: string;
   image?: image;
   title?: string;
   text?: string;
   link?: link;
   links?: link[];
   slider? : image[];
   card?: card[];
   blog?: blog;
   blogs?: blog[];
}

export interface Seo{
    canonical?: string;
    MetaTitle?: string;
    MetaDescription?: string;
    MetaImage?: image;
    StructuredData?: string;
}

export interface Page {
    data: {
        attributes: {
            title: string;
            blocks: {
                data: {
                    attributes: Block;
                }[];
            };
            seo: Seo;
        }
    }

}