import { TypeNode } from "../node";

import { InType } from "../types";
/**
 * Identity node that just passes through the incoming signal or an input node
 * which outputs an input channel.
 *
 * @see TypeNode
 * @see InType
 */
export type InNode = TypeNode<InType>;
