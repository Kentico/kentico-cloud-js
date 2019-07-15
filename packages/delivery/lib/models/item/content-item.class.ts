import { IContentItem, IContentItemDebugData } from '../../interfaces';
import { ContentItemSystemAttributes } from './content-item-system-attributes';
import { ItemLinkResolver, ItemPropertyResolver, ItemRichTextResolver } from './item-resolvers';

export class ContentItem implements IContentItem {

    /**
     * Indexer
     */
    [key: string]: any;

    /**
     * Debug data of the item
     */
    public debug!: IContentItemDebugData;

    /**
     * Content item system elements
     */
    public system!: ContentItemSystemAttributes;

    /**
    * Function used to bind elements returned from Kentico Cloud to a model property.
    * Common use is to bind e.g. 'FirstName' element from Kentico Cloud response to 'firstName' element in model
     */
    public propertyResolver?: ItemPropertyResolver;

    /**
     * Function used to resolve links or URL slug elements
     */
    public linkResolver?: ItemLinkResolver;

    /**
    * Function used to resolve linked items in rich text elements to HTML
    */
    public richTextResolver?: ItemRichTextResolver;

    /**
    * Base class representing content item type. All content type models need to extend this class.
    * @constructor
    */
    constructor(data?: {
        /**
         * Function used to bind elements returned from Kentico Cloud to a model property.
         * Common use is to bind e.g. 'FirstName' element from Kentico Cloud response to 'firstName' element in model
         */
        propertyResolver?: ItemPropertyResolver;

        /**
         *  Function used to resolve links or URL slug elements
         */
        linkResolver?: ItemLinkResolver,

        /**
         * Function used to resolve linked items in rich text elements to HTML
         */
        richTextResolver?: ItemRichTextResolver
    }) {
        if (data) {
            Object.assign(this, data);
        }
    }
}
