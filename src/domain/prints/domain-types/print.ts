import {Record, String, Union, Literal, Static} from 'runtypes'

const MaxTitleLength = 10;
const MaxDescriptionLength = 500;
const StarRating = Union(Literal(1), Literal(2), Literal(3), Literal(4), Literal(5));
const CharacterRestrictedString = (maxLength: number) => String.withConstraint(x => x.length <= maxLength);
const PrintId = String.withConstraint(x => x.startsWith("PRINT-"));

export const Print = Record({
    ID: PrintId,
    Title : CharacterRestrictedString(MaxTitleLength),
    StarRating: StarRating,
    Description: CharacterRestrictedString(MaxDescriptionLength),
    FilePath: String,
    Status: String
});

export type Print = Static<typeof Print>;












